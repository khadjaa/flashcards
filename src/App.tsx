import { LogOutIcon } from '@/assets/icons/IconLogout.tsx'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>
        <LogOutIcon />
        Primary Button
      </Button>
    </div>
  )
}
