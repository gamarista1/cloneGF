import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState, type ReactNode } from "react";

type Mode = "login" | "register" | "forgot";

const inputCls =
  "w-full rounded-xl border border-[var(--surface-lavender)] px-4 py-3 text-sm text-[var(--surface-dark-1)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.14A6.6 6.6 0 0 1 5.5 12c0-.74.13-1.46.34-2.14V7.02H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.98l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 12 1 11 11 0 0 0 2.18 7.02l3.66 2.84c.87-2.6 3.3-4.48 6.16-4.48z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-5 w-5 shrink-0" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-23.6 1.4-51 16.5-66.7 35-17.5 19.8-27.8 44.3-25.6 71.9 25.7-2 49.4-15 68.3-34.4z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="#1877F2">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 5.99 4.39 10.96 10.13 11.86v-8.39H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.47h-2.79v8.39C19.61 23.03 24 18.06 24 12.07z" />
    </svg>
  );
}

function SocialButtons() {
  const providers = [
    { label: "Google", icon: <GoogleIcon /> },
    { label: "Apple", icon: <AppleIcon /> },
    { label: "Facebook", icon: <FacebookIcon /> },
  ];
  return (
    <div className="space-y-3">
      {providers.map((p) => (
        <button
          key={p.label}
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-[var(--surface-lavender)] py-3 text-sm font-bold text-[var(--surface-dark-1)] transition-colors hover:bg-[var(--surface-lavender)]/40"
        >
          {p.icon}
          Continuar con {p.label}
        </button>
      ))}
    </div>
  );
}

function AuthFaceContent({
  content,
  onForgot,
  onSwitchToRegister,
  onSwitchToLogin,
  onBackToLogin,
}: {
  content: "login" | "register" | "forgot";
  onForgot?: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToLogin?: () => void;
  onBackToLogin?: () => void;
}) {
  if (content === "forgot") {
    return (
      <>
        <div className="eyebrow mb-2">Recuperar acceso</div>
        <h3 className="text-h2 text-[var(--surface-dark-1)] mb-5">Restablece tu contraseña</h3>
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Correo electrónico" className={inputCls} />
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-[var(--brand)] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-hover)]"
          >
            Enviar enlace
          </button>
        </form>
        <button type="button" onClick={onBackToLogin} className="mt-6 text-sm font-bold text-[var(--brand)] hover:underline">
          ← Volver a iniciar sesión
        </button>
      </>
    );
  }

  const isLogin = content === "login";
  return (
    <>
      <div className="eyebrow mb-2">{isLogin ? "Bienvenido de nuevo" : "Únete a Grupo Sife"}</div>
      <h3 className="text-h2 text-[var(--surface-dark-1)] mb-6">{isLogin ? "Inicia sesión" : "Crea tu cuenta"}</h3>

      <SocialButtons />

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-[var(--surface-lavender)]" />
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">o con correo</span>
        <span className="h-px flex-1 bg-[var(--surface-lavender)]" />
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && <input type="text" placeholder="Nombre completo" className={inputCls} />}
        <input type="email" placeholder="Correo electrónico" className={inputCls} />
        <input type="password" placeholder="Contraseña" className={inputCls} />
        {!isLogin && <input type="password" placeholder="Confirmar contraseña" className={inputCls} />}
        {isLogin && (
          <button type="button" onClick={onForgot} className="self-end text-xs font-bold text-[var(--brand)] hover:underline">
            ¿Olvidaste tu contraseña?
          </button>
        )}
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[var(--brand)] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-hover)]"
        >
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
        {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
        <button
          type="button"
          onClick={isLogin ? onSwitchToRegister : onSwitchToLogin}
          className="font-bold text-[var(--brand)] hover:underline"
        >
          {isLogin ? "Regístrate" : "Inicia sesión"}
        </button>
      </p>
    </>
  );
}

function AuthFace({ face, children }: { face: "front" | "back"; children: ReactNode }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col rounded-3xl bg-white p-8 shadow-2xl [backface-visibility:hidden] ${
        face === "back" ? "[transform:rotateY(180deg)]" : ""
      }`}
    >
      {children}
    </div>
  );
}

export function AuthModal({
  open,
  onOpenChange,
  initialMode = "login",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const rotated = mode === "register";
  const frontContent: "login" | "forgot" = mode === "forgot" ? "forgot" : "login";

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (next) setMode(initialMode);
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-[var(--surface-dark-1)]/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <DialogPrimitive.Title className="sr-only">{mode === "login" ? "Iniciar sesión" : "Crear cuenta"}</DialogPrimitive.Title>
          <div className="relative">
            <DialogPrimitive.Close
              className="absolute -top-3 -right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-[var(--surface-dark-1)] shadow-lg transition-colors hover:bg-[var(--surface-lavender)]"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>

            <div className="relative [perspective:1800px]">
              {/* Invisible sizer: the register face has the most fields, so it defines the
                  card's height. Both real faces are absolutely positioned to match it,
                  which avoids any internal scrollbar regardless of which face is shown. */}
              <div className="invisible flex flex-col p-8" aria-hidden="true">
                <AuthFaceContent content="register" />
              </div>

              <div
                className={`absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transition-none [transform-style:preserve-3d] ${
                  rotated ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <AuthFace face="front">
                  <AuthFaceContent
                    content={frontContent}
                    onForgot={() => setMode("forgot")}
                    onSwitchToRegister={() => setMode("register")}
                    onBackToLogin={() => setMode("login")}
                  />
                </AuthFace>
                <AuthFace face="back">
                  <AuthFaceContent content="register" onSwitchToLogin={() => setMode("login")} />
                </AuthFace>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
