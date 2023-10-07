import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button variant={'secondary'}>Link</Button>
      <Button variant={'primary'} as={'a'} href={'/link'}>
        Link with a
      </Button>
    </div>
  )
}
