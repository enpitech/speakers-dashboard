import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { SlidersHorizontal, Star } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
} from '~/components/'
import { SpeakersTable } from '~/features/speakers/components/SpeakersTable'
import { mockSpeakers } from '~/features/speakers/api/speakers'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto px-8 py-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {/* Filter Icon */}
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <SlidersHorizontal className="h-5 w-5 text-gray-600" />
            </button>

            {/* Topics Filter */}
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="typescript">Typescript</SelectItem>
                <SelectItem value="tailwind">Tailwind</SelectItem>
              </SelectContent>
            </Select>

            {/* Languages Filter */}
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hebrew">Hebrew</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="russian">Russian</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="amharic">Amharic</SelectItem>
                <SelectItem value="czech">Czech</SelectItem>
              </SelectContent>
            </Select>

            {/* Rating Filter */}
            <Select>
              <SelectTrigger className="w-[200px]">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gray-300 text-gray-300"
                    />
                  ))}
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

    

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Spinner size="lg" />
            </div>
          }
        >
          <SpeakersTable speakers={mockSpeakers} />
        </Suspense>
      </main>
    </div>
  )
}
