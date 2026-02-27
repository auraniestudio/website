interface PageVideoBackgroundProps {
  children: React.ReactNode
}

export function PageVideoBackground({ children }: PageVideoBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed video background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="/star.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(6,6,10,0.5) 0%, rgba(10,10,15,0.75) 50%, rgba(10,10,12,0.95) 100%)',
          }}
        />
      </div>
      {/* Content scrolls over video */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
