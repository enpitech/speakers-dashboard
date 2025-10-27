import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
      <Card className="w-full max-w-2xl mx-4 shadow-xl">
        <CardHeader className="text-center space-y-4 ">
          <CardTitle className="text-4xl md:text-5xl font-bold">
            Welcome to Speakers Dashboard
          </CardTitle>
          <CardDescription className="text-lg">
            Manage and discover amazing speakers for your events
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center ">
          <Link to="/dashboard">
            <Button 
              size="lg"
              className="bg-primary-color hover:bg-secondary-color text-white text-lg rounded-lg transition-all hover:scale-105"
            >
              Go to Dashboard →
            </Button>
          </Link>
        </CardContent>
      </Card>
  )
}