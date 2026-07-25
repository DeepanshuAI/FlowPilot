import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle2, Zap, ArrowRight, Clock, ShieldCheck, Cpu, Database, Mail, MessageSquare, Webhook } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const presets = [
  {
    id: 'lead-onboarding',
    title: 'Client Lead Onboarding',
    description: 'Triggered when a new lead submits your website form or booking calendar.',
    timeSaved: '14.5 hrs/wk',
    avgLatency: '128ms',
    steps: [
      { id: 1, name: 'Form Webhook', type: 'Trigger', icon: Webhook, status: 'instant' },
      { id: 2, name: 'AI Data Extraction', type: 'AI Agent', icon: Cpu, status: '45ms' },
      { id: 3, name: 'CRM Enrichment', type: 'Database', icon: Database, status: '32ms' },
      { id: 4, name: 'Personalized Email', type: 'Communication', icon: Mail, status: '28ms' },
      { id: 5, name: 'Slack Alert', type: 'Notification', icon: MessageSquare, status: '23ms' },
    ],
  },
  {
    id: 'support-triage',
    title: 'AI Support Ticket Triage',
    description: 'Categorizes incoming support requests and drafts instant human-like replies.',
    timeSaved: '22.0 hrs/wk',
    avgLatency: '195ms',
    steps: [
      { id: 1, name: 'Email Ingestion', type: 'Trigger', icon: Mail, status: 'instant' },
      { id: 2, name: 'Sentiment & Tagging', type: 'AI Agent', icon: Cpu, status: '72ms' },
      { id: 3, name: 'Ticket Routing', type: 'Workflow', icon: Zap, status: '40ms' },
      { id: 4, name: 'Draft Auto-Reply', type: 'AI Agent', icon: Cpu, status: '65ms' },
      { id: 5, name: 'Escalate if Urgent', type: 'Logic Rule', icon: ShieldCheck, status: '18ms' },
    ],
  },
  {
    id: 'payment-recovery',
    title: 'Failed Payment Recovery',
    description: 'Automatically detects failed invoices and triggers personalized recovery flows.',
    timeSaved: '9.8 hrs/wk',
    avgLatency: '110ms',
    steps: [
      { id: 1, name: 'Stripe Failed Event', type: 'Trigger', icon: Webhook, status: 'instant' },
      { id: 2, name: 'Account Check', type: 'Database', icon: Database, status: '22ms' },
      { id: 3, name: 'SMS Reminder', type: 'Communication', icon: MessageSquare, status: '40ms' },
      { id: 4, name: 'Calendar Booking Link', type: 'Workflow', icon: Zap, status: '30ms' },
      { id: 5, name: 'Audit Log Entry', type: 'Database', icon: ShieldCheck, status: '18ms' },
    ],
  },
];

export default function InteractiveWorkflowBuilder() {
  const [activePresetId, setActivePresetId] = useState('lead-onboarding');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState([]);

  const activePreset = presets.find((p) => p.id === activePresetId) || presets[0];

  // Reset state when switching preset
  const handlePresetSelect = (id) => {
    setActivePresetId(id);
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setLogs([]);
  };

  // Run simulation sequence
  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setLogs([`[00:00.000] Initializing ${activePreset.title}...`]);
  };

  useEffect(() => {
    if (!isRunning || currentStepIndex < 0) return;

    if (currentStepIndex < activePreset.steps.length) {
      const step = activePreset.steps[currentStepIndex];
      const timer = setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          `[+${step.status}] Executed step ${step.id}: ${step.name} (${step.type}) — SUCCESS`,
        ]);
        setCurrentStepIndex((idx) => idx + 1);
      }, 600);

      return () => clearTimeout(timer);
    } else {
      // Completed sequence
      const finalTimer = setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          `[DONE] Automation complete in ${activePreset.avgLatency}. Saved ~${activePreset.timeSaved}!`,
        ]);
        setIsRunning(false);
      }, 400);
      return () => clearTimeout(finalTimer);
    }
  }, [isRunning, currentStepIndex, activePreset]);

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setLogs([]);
  };

  return (
    <div
      role="region"
      aria-label="Interactive Live Automation Flow Simulator"
      className="w-full max-w-5xl mx-auto glass-card border border-brand-500/30 p-6 md:p-10 shadow-glow-lg rounded-3xl"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <Badge variant="emerald">Live Interactive Simulator</Badge>
          </div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            Test Drive FlowPilot Engine
          </h3>
          <p className="text-sm text-secondary mt-1">
            Select a template below and click <strong className="text-white font-semibold">Run Live Simulation</strong> to test execution.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant={isRunning ? 'secondary' : 'primary'}
            size="md"
            onClick={runSimulation}
            disabled={isRunning}
            aria-live="polite"
            className="shadow-glow"
          >
            {isRunning ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" aria-hidden="true" />
                Executing Flow...
              </>
            ) : (
              <>
                <Play size={16} aria-hidden="true" />
                Run Live Simulation
              </>
            )}
          </Button>

          {logs.length > 0 && !isRunning && (
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={resetSimulation}
              aria-label="Reset simulation"
            >
              <RotateCcw size={16} aria-hidden="true" />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Template Selector Tabs */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        role="tablist"
        aria-label="Automation Preset Templates"
      >
        {presets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            role="tab"
            aria-selected={activePresetId === preset.id}
            onClick={() => handlePresetSelect(preset.id)}
            className={[
              'px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
              activePresetId === preset.id
                ? 'bg-brand-500/25 border border-brand-400/40 text-white shadow-sm shadow-brand-950'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10',
            ].join(' ')}
          >
            {preset.title}
          </button>
        ))}
      </div>

      {/* Workflow Step Node Pipeline */}
      <div className="mb-8">
        <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4">
          Pipeline Topology ({activePreset.steps.length} Steps)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {activePreset.steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = currentStepIndex > idx || (currentStepIndex === activePreset.steps.length && !isRunning);
            const isCurrent = currentStepIndex === idx && isRunning;

            return (
              <div
                key={step.id}
                className={[
                  'relative p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[120px]',
                  isCompleted
                    ? 'border-emerald-400/40 bg-emerald-500/10 shadow-glow-emerald'
                    : isCurrent
                    ? 'border-brand-400 bg-brand-500/20 shadow-glow animate-pulse-subtle scale-102'
                    : 'border-white/10 bg-white/5 opacity-80',
                ].join(' ')}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-emerald-400/20 text-emerald-300' : isCurrent ? 'bg-brand-400/30 text-brand-200' : 'bg-white/10 text-white/60'}`}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  {isCompleted ? (
                    <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                      Step {step.id}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-xs font-bold text-white tracking-tight truncate">{step.name}</p>
                  <p className="text-[11px] text-secondary mt-0.5">{step.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Execution Metrics & Live Terminal Output */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Key Metrics */}
        <div className="glass-card p-5 border border-white/10 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300">
              <Clock size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted font-medium">Avg Execution Time</p>
              <p className="text-xl font-bold text-white tracking-tight">{activePreset.avgLatency}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <ShieldCheck size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted font-medium">Estimated Time Saved</p>
              <p className="text-xl font-bold text-emerald-400 tracking-tight">{activePreset.timeSaved}</p>
            </div>
          </div>
        </div>

        {/* Live Execution Console */}
        <div className="lg:col-span-2 rounded-2xl bg-surface-950 border border-white/10 p-4 font-mono text-xs text-brand-300 min-h-[130px] flex flex-col justify-between overflow-hidden shadow-inner-light">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white/50 text-[11px]">
            <span>AUTOMATION ENGINE CONSOLE</span>
            <span>STATUS: {isRunning ? 'RUNNING' : logs.length > 0 ? 'COMPLETE' : 'IDLE'}</span>
          </div>

          <div
            className="flex-1 py-3 overflow-y-auto max-h-[110px] space-y-1.5 scrollbar-none"
            aria-live="polite"
          >
            {logs.length === 0 ? (
              <p className="text-white/40 italic">Click "Run Live Simulation" to view real-time engine trace...</p>
            ) : (
              logs.map((log, i) => (
                <p
                  key={i}
                  className={log.includes('DONE') ? 'text-emerald-400 font-bold' : log.includes('SUCCESS') ? 'text-brand-300' : 'text-white/70'}
                >
                  {log}
                </p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
