import styled from '@emotion/styled'
import { useMediaQuery } from '@mantine/hooks'

const Section1 = styled.div`
  border-radius: 10px;
  border: 1px solid red;
  width: 400px;
  height: 300px;
  margin: 5px;
`

const Section2 = styled.div`
  border-radius: 10px;
  border: 1px solid blue;
  width: 400px;
  height: 300px;
  margin: 5px;
`

function Index() {
  const m = useMediaQuery('(max-width: 512px)')

  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
      }}
    >
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Index
