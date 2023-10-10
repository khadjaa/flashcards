import logo from '../../../assets/images/Logo.png'

import styles from './Header.module.scss'

import { Button } from '@/components/ui/button'

type HeaderProps = {
  isLoggedIn: boolean
}

export const Header = (props: HeaderProps) => {
  // const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)
  const { isLoggedIn } = props
  // const logo1 = require('../../../assets/images/Logo.png').default

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      {isLoggedIn ? (
        <div className={styles.profile}>Ivan</div>
      ) : (
        <Button variant={'primary'}>Sign in</Button>
      )}
    </div>
  )
}
