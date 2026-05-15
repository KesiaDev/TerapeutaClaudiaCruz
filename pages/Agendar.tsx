<<<<<<< Updated upstream
import { useState, useEffect } from 'react';

const API = 'https://psipro-backend-production.up.railway.app/api/public/booking';

const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const DAYS_SHORT = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function pad(n: number) { return String(n).padStart(2, '0'); }

export default function Agendar() {
=======
import React, { useState, useEffect } from 'react';

const API = 'https://psipro-backend-production.up.railway.app/api';

type Slot = { startTime: string; endTime: string; isoDateTime: string };

type Step = 'tipo' | 'data' | 'horario' | 'dados' | 'sucesso';

const MONTHS = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];
const WEEK = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

const Agendar: React.FC = () => {
  const [step, setStep] = useState<Step>('tipo');
  const [isNewPatient, setIsNewPatient] = useState<boolean | null>(null);

>>>>>>> Stashed changes
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [availableDays, setAvailableDays] = useState<number[]>([]);
  const [loadingDays, setLoadingDays] = useState(false);

<<<<<<< Updated upstream
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<{ startTime: string; endTime: string; isoDateTime: string }[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [isNewPatient, setIsNewPatient] = useState<boolean | null>(null);
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
    if (isNewPatient === null) { setError('Informe se você é paciente novo ou não.'); return; }
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
=======
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);

  // Carregar dias disponíveis ao navegar no mês
  useEffect(() => {
    if (step !== 'data') return;
    setLoadingDays(true);
    setAvailableDays([]);
    setSelectedDay(null);
    fetch(`${API}/public/booking/available-days?year=${year}&month=${month}`)
      .then(r => r.json())
      .then(d => setAvailableDays(Array.isArray(d) ? d : []))
      .catch(() => setAvailableDays([]))
      .finally(() => setLoadingDays(false));
  }, [step, year, month]);

  // Carregar slots ao selecionar dia
  useEffect(() => {
    if (!selectedDay) return;
    setLoadingSlots(true);
    setSlots([]);
    setSelectedSlot(null);
    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(selectedDay).padStart(2,'0')}`;
    fetch(`${API}/public/booking/slots?date=${dateStr}&duration=60`)
      .then(r => r.json())
      .then(d => setSlots(Array.isArray(d) ? d : []))
      .catch(() => setSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [selectedDay]);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !selectedSlot) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${API}/public/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName: name.trim(),
          patientPhone: phone.replace(/\D/g, ''),
          patientEmail: email.trim() || undefined,
          isoDateTime: selectedSlot.isoDateTime,
          notes: notes.trim() || undefined,
>>>>>>> Stashed changes
          isNewPatient: isNewPatient === true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Erro ao agendar.');
<<<<<<< Updated upstream
      setConfirmed({ scheduledAt: data.scheduledAt, patientName: data.patientName, intakeLink: data.intakeLink ?? null });
    } catch (err: any) {
      setError(err.message || 'Erro ao agendar. Tente novamente.');
=======
      setResult(data);
      setStep('sucesso');
    } catch (e: any) {
      setError(e.message || 'Erro ao agendar. Tente novamente.');
>>>>>>> Stashed changes
    } finally {
      setSubmitting(false);
    }
  };

<<<<<<< Updated upstream
  // Calendário
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const todayDay = today.getDate();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() + 1 === month;
=======
  // Montar grade do calendário
  const buildCalendar = () => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  };

  const isPast = (d: number) => {
    const dt = new Date(year, month - 1, d);
    dt.setHours(23, 59, 59);
    return dt < today;
  };
>>>>>>> Stashed changes

  const prevMonth = () => {
    if (month === 1) { setYear(y => y - 1); setMonth(12); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1); }
    else setMonth(m => m + 1);
  };
<<<<<<< Updated upstream
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
                {/* Paciente novo? */}
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-2">Você é paciente novo(a)? *</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setIsNewPatient(true)}
                      className={`py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all flex items-center justify-center gap-2
                        ${isNewPatient === true
                          ? 'bg-[#1f4c4a] border-[#1f4c4a] text-white shadow-md'
                          : 'border-slate-200 text-slate-600 hover:border-[#1f4c4a] hover:text-[#1f4c4a]'
                        }`}
                    >
                      🌱 Sim, sou novo(a)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsNewPatient(false)}
                      className={`py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all flex items-center justify-center gap-2
                        ${isNewPatient === false
                          ? 'bg-[#1f4c4a] border-[#1f4c4a] text-white shadow-md'
                          : 'border-slate-200 text-slate-600 hover:border-[#1f4c4a] hover:text-[#1f4c4a]'
                        }`}
                    >
                      👋 Já sou paciente
                    </button>
                  </div>
                  {isNewPatient === true && (
                    <p className="text-xs text-[#1f4c4a] mt-2 bg-[#f0f7f6] rounded-lg px-3 py-2">
                      📋 Você receberá um formulário de anamnese pelo WhatsApp para preencher antes da consulta.
                    </p>
                  )}
                </div>

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
=======

  const formatDateLabel = () => {
    if (!selectedDay) return '';
    return new Date(year, month - 1, selectedDay)
      .toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  };

  // Cores do site
  const primary = '#1F4D4A';
  const accent = '#c46a3a';

  return (
    <div className="bg-[#F7F4EE] min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Agendamento Online</span>
          <h1 className="text-4xl font-bold mt-2 font-fraunces" style={{ color: primary }}>
            Agende sua Consulta
          </h1>
          <p className="text-slate-600 mt-2">Com a Terapeuta Claudia Cruz</p>
        </div>

        {/* Steps indicator */}
        {step !== 'sucesso' && (
          <div className="flex justify-center gap-2 mb-8">
            {(['tipo','data','horario','dados'] as Step[]).map((s, i) => (
              <div key={s} className={`w-8 h-2 rounded-full transition-all ${step === s ? 'opacity-100' : 'opacity-30'}`}
                style={{ backgroundColor: primary }} />
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* STEP 1: Tipo de paciente */}
          {step === 'tipo' && (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: primary }}>Você é paciente novo?</h2>
              <p className="text-slate-500 text-sm mb-6">Isso nos ajuda a preparar melhor o seu atendimento.</p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => { setIsNewPatient(true); setStep('data'); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all hover:shadow-md"
                  style={{ borderColor: primary }}
                >
                  <span className="text-3xl">🌱</span>
                  <div>
                    <p className="font-bold" style={{ color: primary }}>Sim, sou paciente novo(a)</p>
                    <p className="text-sm text-slate-500">Primeira vez com a Terapeuta Claudia Cruz</p>
                  </div>
                </button>
                <button
                  onClick={() => { setIsNewPatient(false); setStep('data'); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-slate-200 text-left transition-all hover:shadow-md"
                >
                  <span className="text-3xl">👋</span>
                  <div>
                    <p className="font-bold text-slate-700">Não, já sou paciente</p>
                    <p className="text-sm text-slate-500">Já realizei atendimentos anteriormente</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Calendário */}
          {step === 'data' && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: primary }}>Escolha uma data</h2>
              <p className="text-slate-500 text-sm mb-5">Dias em destaque têm horários disponíveis.</p>

              {/* Nav do mês */}
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-slate-100">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <span className="font-bold text-lg" style={{ color: primary }}>{MONTHS[month-1]} {year}</span>
                <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-slate-100">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              {/* Grade */}
              <div className="grid grid-cols-7 gap-1 text-center mb-4">
                {WEEK.map(w => (
                  <div key={w} className="text-xs font-bold text-slate-400 py-1">{w}</div>
                ))}
                {buildCalendar().map((d, i) => {
                  if (!d) return <div key={i} />;
                  const past = isPast(d);
                  const avail = availableDays.includes(d);
                  const selected = selectedDay === d;
                  return (
                    <button key={i}
                      disabled={past || !avail || loadingDays}
                      onClick={() => setSelectedDay(d)}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all
                        ${selected ? 'text-white shadow-md' : ''}
                        ${!past && avail && !selected ? 'hover:shadow-md' : ''}
                        ${past || !avail ? 'text-slate-300 cursor-not-allowed' : ''}
                      `}
                      style={{
                        backgroundColor: selected ? primary : (!past && avail ? '#EEF3F1' : 'transparent'),
                        color: selected ? '#fff' : (!past && avail ? primary : undefined),
                      }}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
              {loadingDays && <p className="text-center text-sm text-slate-400">Carregando disponibilidade...</p>}

              <button
                disabled={!selectedDay}
                onClick={() => setStep('horario')}
                className="w-full py-3 rounded-xl font-bold text-white mt-4 disabled:opacity-40 transition-all"
                style={{ backgroundColor: primary }}
              >
                Continuar
              </button>
              <button onClick={() => setStep('tipo')} className="w-full text-center text-sm text-slate-400 mt-3 hover:text-slate-600">← Voltar</button>
            </div>
          )}

          {/* STEP 3: Horários */}
          {step === 'horario' && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: primary }}>Escolha o horário</h2>
              <p className="text-slate-500 text-sm mb-5 capitalize">{formatDateLabel()}</p>

              {loadingSlots && <p className="text-center text-sm text-slate-400 py-8">Carregando horários...</p>}

              {!loadingSlots && slots.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-slate-500">Nenhum horário disponível neste dia.</p>
                  <button onClick={() => setStep('data')} className="mt-4 text-sm font-bold" style={{ color: primary }}>Escolher outra data</button>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 mb-6">
                {slots.map((slot) => (
                  <button key={slot.isoDateTime}
                    onClick={() => setSelectedSlot(slot)}
                    className="py-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      backgroundColor: selectedSlot?.isoDateTime === slot.isoDateTime ? primary : '#EEF3F1',
                      color: selectedSlot?.isoDateTime === slot.isoDateTime ? '#fff' : primary,
                    }}
                  >
                    {slot.startTime}
                  </button>
                ))}
              </div>

              <button
                disabled={!selectedSlot}
                onClick={() => setStep('dados')}
                className="w-full py-3 rounded-xl font-bold text-white disabled:opacity-40 transition-all"
                style={{ backgroundColor: primary }}
              >
                Continuar
              </button>
              <button onClick={() => setStep('data')} className="w-full text-center text-sm text-slate-400 mt-3 hover:text-slate-600">← Voltar</button>
            </div>
          )}

          {/* STEP 4: Dados pessoais */}
          {step === 'dados' && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: primary }}>Seus dados</h2>
              <p className="text-slate-500 text-sm mb-5">
                {selectedSlot && formatDateLabel()} às {selectedSlot?.startTime}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">Nome completo *</label>
                  <input
                    value={name} onChange={e => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': primary } as any}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">WhatsApp *</label>
                  <input
                    value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="(51) 99999-9999"
                    type="tel"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">E-mail <span className="text-slate-400 font-normal">(opcional)</span></label>
                  <input
                    value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    type="email"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">Observações <span className="text-slate-400 font-normal">(opcional)</span></label>
                  <textarea
                    value={notes} onChange={e => setNotes(e.target.value)}
                    placeholder="Algo que queira compartilhar antes da consulta..."
                    rows={3}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 resize-none"
                  />
                </div>

                {isNewPatient && (
                  <div className="bg-[#EEF3F1] rounded-xl p-4 text-sm" style={{ color: primary }}>
                    🌱 <strong>Paciente novo:</strong> Você receberá um formulário de anamnese pelo WhatsApp após o agendamento.
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">{error}</div>
              )}

              <button
                disabled={!name.trim() || !phone.trim() || submitting}
                onClick={handleSubmit}
                className="w-full py-3 rounded-xl font-bold text-white mt-6 disabled:opacity-40 transition-all"
                style={{ backgroundColor: primary }}
              >
                {submitting ? 'Agendando...' : 'Confirmar Agendamento'}
              </button>
              <button onClick={() => setStep('horario')} className="w-full text-center text-sm text-slate-400 mt-3 hover:text-slate-600">← Voltar</button>
            </div>
          )}

          {/* STEP 5: Sucesso */}
          {step === 'sucesso' && (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2 font-fraunces" style={{ color: primary }}>Consulta Agendada!</h2>
              <p className="text-slate-600 mb-6">
                Você receberá a confirmação pelo WhatsApp em instantes.
              </p>
              {result?.scheduledAt && (
                <div className="bg-[#EEF3F1] rounded-xl p-5 mb-6 text-left">
                  <p className="text-sm text-slate-500 mb-1">Data e horário confirmados:</p>
                  <p className="font-bold capitalize" style={{ color: primary }}>
                    {new Date(result.scheduledAt).toLocaleString('pt-BR', {
                      timeZone: 'America/Sao_Paulo',
                      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>
              )}
              {isNewPatient && (
                <p className="text-sm text-slate-500 mb-6">
                  Fique atento(a) ao WhatsApp — enviaremos o formulário de anamnese para você preencher antes da consulta.
                </p>
              )}
              <a href="/" className="inline-block py-3 px-8 rounded-xl font-bold text-white transition-all" style={{ backgroundColor: primary }}>
                Voltar ao Início
              </a>
            </div>
          )}

>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
<<<<<<< Updated upstream
}
=======
};

export default Agendar;
>>>>>>> Stashed changes
