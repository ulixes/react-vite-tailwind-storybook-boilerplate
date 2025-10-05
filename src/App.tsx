import { Calendar } from './components/ui/calendar'
import { ThemeSwitcher } from './components/theme/theme-switcher'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">UI Components</h1>
          <ThemeSwitcher />
        </div>
        <p className="text-muted-foreground mb-6">Testing shadcn/ui components with Claymorphism theme</p>

        <div className="inline-block p-4 rounded-lg border bg-card">
          <Calendar mode="single" />
        </div>
      </div>
    </div>
  )
}

export default App
