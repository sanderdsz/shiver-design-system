/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { Link, useConfig } from 'docz'

import logo from '@images/logo.svg'

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <div>
      <Flex>
        <Box sx={styles.logo}>
          <img src="https://svgshare.com/i/NVw.svg"/>
        </Box>
        <Box sx={styles.title}>
          <Link to="/" sx={styles.link}>
            {config.title}
          </Link>
        </Box>
      </Flex>
    </div>
  )
}