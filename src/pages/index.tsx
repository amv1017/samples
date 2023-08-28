import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Section1 = styled.div`
  border-radius: 4px;
  background-color: #6aa;
  width: 200px;
  height: 150px;
  &:hover {
    transform: translateX(10px);
  }
`

const orangeTextStyle = css`
  color: orange;
  &:hover {
    transform: translateX(10px);
  }
`

const Section2 = ({ children }: { children: React.ReactNode }) => (
  <div css={orangeTextStyle}>{children}</div>
)

const underlineStyle = css({
  textDecoration: 'underline',
  ['&:hover']: {
    transform: 'translateX(10px)',
  },
})

const Section3 = ({ children }: { children: React.ReactNode }) => (
  <div css={underlineStyle}>{children}</div>
)

function Index() {
  return (
    <div style={{ padding: '40px' }}>
      <Section1 />
      <Section2>orange text</Section2>
      <Section3>underlined text</Section3>
    </div>
  )
}

export default Index
