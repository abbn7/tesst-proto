import { useState, type FormEvent } from "react";
import { GlassCard } from "./GlassCard";
import { Send } from "lucide-react";

type Form = { name: string; email: string; subject: string; message: string };

export function ContactForm({ labels }: {
  labels: {
    title: string; name: string; nameP: string;
    emailL: string; emailP: string;
    subject: string; subjectP: string;
    message: string; messageP: string;
    send: string; sending: string;
  };
}) {
  const [f, setF] = useState<Form>({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(f.subject || "New message from your portfolio");
    const body = encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`);
    window.location.href = `mailto:dior53634@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSending(false), 1200);
  };

  const input = "w-full bg-transparent border-0 border-b border-separator focus:border-accent-blue focus:outline-none py-3 text-text-primary placeholder:text-text-tertiary transition-colors";

  return (
    <GlassCard variant="elevated" className="p-8 sm:p-10">
      <h3 className="text-display text-3xl mb-8 text-text-primary">{labels.title}</h3>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{labels.name}</span>
            <input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder={labels.nameP} className={input} />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{labels.emailL}</span>
            <input required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder={labels.emailP} className={input} />
          </label>
        </div>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{labels.subject}</span>
          <input value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} placeholder={labels.subjectP} className={input} />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{labels.message}</span>
          <textarea required rows={5} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder={labels.messageP} className={`${input} resize-none`} />
        </label>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-text-primary text-bg-primary px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform disabled:opacity-60"
        >
          <Send className="size-4" />
          {sending ? labels.sending : labels.send}
        </button>
      </form>
    </GlassCard>
  );
}
