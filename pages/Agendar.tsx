import { useState, useEffect } from 'react';

const API = 'https://psipro-backend-production.up.railway.app/api/public/booking';

const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const DAYS_SHORT = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function pad(n: number) { return String(n).padStart(2, '0'); }

export default function Agendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [availableDays, setAvailableDays] = useState<number[]>([]);
  const [loadingDays, setLoadingDays] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<{ startTime: string; endTime: string; isoDateTime: string }[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<{ scheduledAt: string; patientName: string; intakeLink?: string | null } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Busca dias disponíveis ao mudar mês
  useEffect(() => {
    setLoadingDays(true);
    setAvailableDays([]);
    setSelectedDate(null);
    setSlots([]);
    setSelectedSlot(null);
    fetch(`${API}/available-days?year=${year}&month=${month}`)
      .then(r => r.json())
      .then(data => setAvailableDays(Array.isArray(data) ? data : []))
      .catch(() => setAvailableDays([]))
      .finally(() => setLoadingDays(false));
  }, [year, month]);

  // Busca slots ao selecionar dia
  const selectDay = (day: number) => {
    const date = `${year}-${pad(month)}-${pad(day)}`;
    setSelectedDate(date);
    setSelectedSlot(null);
    setSlots([]);
    setLoadingSlots(true);
    fetch(`${API}/slots?date=${date}`)
      .then(r => r.json())
      .then(data => setSlots(Array.isArray(data) ? data : []))
      .catch(() => setSlots([]))
      .finally(() => setLoadingSlots(false));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) { setError('Selecione um horário.'); return; }
    if (!form.name.trim()) { setError('Informe seu nome.'); return; }
    if (!form.phone.trim() && !form.email.trim()) { setError('Informe telefone ou e-mail.'); return; }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`${API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName: form.name.trim(),
          patientEmail: form.email.trim() || undefined,
          patientPhone: form.phone.trim() || undefined,
          isoDateTime: selectedSlot,
          notes: form.notes.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Erro ao agendar.');
      setConfirmed({ scheduledAt: data.scheduledAt, patientName: data.patientName, intakeLink: data.intakeLink ?? null });
    } catch (err: any) {
      setError(err.message || 'Erro ao agendar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  // Calendário
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const todayDay = today.getDate();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() + 1 === month;

  const prevMonth = () => {
    if (month === 1) { setYear(y => y - 1); setMonth(12); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1); }
    else setMonth(m => m + 1);
  };
  const canGoPrev = !(year === today.getFullYear() && month === today.getMonth() + 1);

  if (confirmed) {
    const dt = new Date(confirmed.scheduledAt);
    const dateStr = dt.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    const timeStr = dt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
    return (
      <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1f4c4a] mb-2 font-fraunces">Consulta agendada!</h2>
          <p className="text-slate-600 mb-6">
            Olá, <strong>{confirmed.patientName}</strong>! Sua consulta foi marcada para:
          </p>
          <div className="bg-[#f0f7f6] rounded-xl p-4 mb-6">
            <p className="font-bold text-[#1f4c4a] text-lg capitalize">{dateStr}</p>
            <p className="text-[#c46a3a] font-bold text-xl">às {timeStr}</p>
          </div>
          {confirmed.intakeLink ? (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-bold text-amber-800 mb-1">📋 Formulário de anamnese</p>
              <p className="text-sm text-amber-700 mb-3">
                Para otimizar nossa consulta, preencha o formulário de anamnese antes do atendimento. Você também receberá o link pelo WhatsApp e e-mail.
              </p>
              <a
                href={confirmed.intakeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-amber-700 transition-all"
              >
                Preencher formulário agora
              </a>
            </div>
          ) : (
            <p className="text-sm text-slate-500 mb-6">Você receberá um lembrete antes da consulta. Em caso de dúvidas, entre em contato via WhatsApp.</p>
          )}
          <a href="/" className="inline-block bg-[#1f4c4a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1f4c4a]/90 transition-all">
            Voltar ao início
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Header */}
      <div className="bg-[#1f4c4a] text-white py-10 px-6 text-center">
        <a href="/" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Voltar ao site
        </a>
        <h1 className="text-3xl md:text-4xl font-black font-fraunces">Agendar Consulta</h1>
        <p className="text-white/70 mt-2">Terapeuta Claudia Cruz • Psicoterapia Individual</p>
      </div>

      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Calendário */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1f4c4a] mb-4">Escolha uma data</h2>

          {/* Nav mês */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              disabled={!canGoPrev}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="font-bold text-[#1f4c4a]">{MONTHS[month - 1]} {year}</span>
            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* Cabeçalho dias da semana */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS_SHORT.map(d => (
              <div key={d} className="text-center text-xs font-bold text-slate-400 py-1">{d}</div>
            ))}
          </div>

          {/* Grade do calendário */}
          {loadingDays ? (
            <div className="flex items-center justify-center h-40 text-slate-400">
              <span className="material-symbols-outlined animate-spin text-3xl">progress_activity</span>
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`e-${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isPast = isCurrentMonth && day < todayDay;
                const isAvailable = availableDays.includes(day);
                const dateStr = `${year}-${pad(month)}-${pad(day)}`;
                const isSelected = selectedDate === dateStr;
                const isSunday = new Date(year, month - 1, day).getDay() === 0;

                return (
                  <button
                    key={day}
                    disabled={isPast || !isAvailable || isSunday}
                    onClick={() => selectDay(day)}
                    className={`
                      aspect-square rounded-lg text-sm font-medium transition-all
                      ${isSelected ? 'bg-[#c46a3a] text-white shadow-md scale-105' : ''}
                      ${!isSelected && isAvailable && !isPast ? 'bg-[#f0f7f6] text-[#1f4c4a] hover:bg-[#1f4c4a] hover:text-white cursor-pointer' : ''}
                      ${!isAvailable || isPast || isSunday ? 'text-slate-300 cursor-not-allowed' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          )}

          <p className="text-xs text-slate-400 mt-4 text-center">
            Dias destacados têm horários disponíveis • Domingos não atendidos
          </p>
        </div>

        {/* Horários + Formulário */}
        <div className="flex flex-col gap-6">
          {/* Slots */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#1f4c4a] mb-4">
              {selectedDate
                ? `Horários — ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}`
                : 'Selecione uma data'}
            </h2>

            {!selectedDate && (
              <p className="text-slate-400 text-sm">← Clique em um dia disponível no calendário</p>
            )}

            {loadingSlots && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Carregando horários...
              </div>
            )}

            {!loadingSlots && selectedDate && slots.length === 0 && (
              <p className="text-slate-400 text-sm">Nenhum horário disponível neste dia.</p>
            )}

            {!loadingSlots && slots.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {slots.map(s => (
                  <button
                    key={s.isoDateTime}
                    onClick={() => setSelectedSlot(s.isoDateTime)}
                    className={`
                      py-2 px-3 rounded-lg text-sm font-bold border-2 transition-all
                      ${selectedSlot === s.isoDateTime
                        ? 'bg-[#c46a3a] border-[#c46a3a] text-white scale-105 shadow-md'
                        : 'border-[#1f4c4a]/20 text-[#1f4c4a] hover:border-[#c46a3a] hover:text-[#c46a3a]'
                      }
                    `}
                  >
                    {s.startTime}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Formulário */}
          {selectedSlot && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1f4c4a] mb-4">Seus dados</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-1">Nome completo *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Seu nome"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1f4c4a] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-1">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="(54) 99999-9999"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1f4c4a] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-1">E-mail</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1f4c4a] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-1">Observação (opcional)</label>
                  <textarea
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    placeholder="Algum motivo específico ou dúvida?"
                    rows={2}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1f4c4a] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#c46a3a] text-white py-3.5 rounded-lg font-bold hover:bg-[#c46a3a]/90 disabled:opacity-60 transition-all"
                >
                  {submitting ? 'Agendando...' : 'Confirmar Agendamento'}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Ao agendar, você receberá um lembrete antes da consulta.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
