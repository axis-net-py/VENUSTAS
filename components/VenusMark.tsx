/* Busto Venustas — perfil feminino com ramo de louro, redesenho vetorial do logo */
export default function VenusMark({ circled = false, className }: { circled?: boolean; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {circled && <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="1.6" />}
      <g fill="currentColor">
        {/* cabelo — massa fluida à esquerda, caindo sobre o ombro */}
        <path d="M63 22c-11-3-22 2-26 11-3 7-2 13 1 19-4 2-7 6-8 11-1 6 1 11 5 15 3 3 8 5 12 4-2-2-4-6-4-9-3-1-5-4-5-8 0-5 4-9 8-10-4-5-5-11-2-16 3-6 10-9 17-8 1-3 2-6 2-9z" />
        <path d="M40 52c-5 9-5 20 1 28 3 4 7 7 12 8-4-6-6-13-5-20-4-4-7-10-8-16z" opacity=".55" />
        {/* rosto em perfil (direita) */}
        <path d="M62 24c6 1 11 5 13 11l1 8c0 1 2 4 3 6 .6 1.2.2 2-1 2.2l-2.4.4c.3 1.4-.2 2.2-1 2.8.6.8.7 1.8 0 2.6-1 1.2-3 1.6-5.4 1l-1.2 6c-3 0-6-1-8-3l1-8c-3-4-4-9-3-14 1-6 2-12 4-15z" />
        {/* ramo de louro sobre a cabeça */}
        <g transform="translate(5 1)">
          <path d="M46 20c8-6 18-8 27-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M48 19c0-4 2-7 5-9 1 4 0 7-5 9z" />
          <path d="M56 15c1-4 4-6 8-7-1 4-3 6-8 7z" />
          <path d="M65 13c2-3 5-5 9-5-1 4-4 6-9 5z" />
          <path d="M50 22c-4-1-6-4-7-8 4 1 6 4 7 8z" />
        </g>
        {/* pescoço, colo e busto */}
        <path d="M56 62l10 4c-1 8 2 14 9 18 5 3 8 8 8 14H36c0-6 3-11 8-14 7-4 11-10 12-17z" />
      </g>
    </svg>
  );
}
