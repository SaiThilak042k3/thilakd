export default function Footer() {
  return (
    <footer className="py-6 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-xs">
              T
            </div>
            <div className="text-2xl font-bold gradient-text">
              Thilak<span className="text-primary">.</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Thilak. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

