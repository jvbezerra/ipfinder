import { useState } from 'react'
import type { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import DataDisplay from '../components/DataDisplay'
import Search from '../components/Search'
import { getIpData } from '../service'
const Map = dynamic(import ('../components/Map'), { ssr: false })

interface Props {
  defaultData: IpData & {
    coordinates: [number, number],
  }
}

const Home: React.FC<Props> = ({ defaultData }) => {
  const [address, setAddress] = useState<IpData>()

  const onSearch = async (ip: string) => {
    const { location, isp } = await getIpData(ip)
    setAddress({
      ip,
      location,
      isp: isp.split(' ')[0],
      coordinates: [location.lat, location.lng]
    })
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Search
        onSubmit={onSearch}
      />
      
      <DataDisplay
        ip={address?.ip ?? defaultData.ip}
        location={address?.location ?? defaultData.location}
        isp={address?.isp ?? defaultData.isp}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <Map
          coordinates={address?.coordinates ?? defaultData.coordinates}
        />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const reqAddress = ((req?.headers["x-real-ip"] || req?.connection.remoteAddress) as string).split(':')
  const ip = reqAddress[reqAddress.length - 1]
  let defaultData: any = {}

  try {
    const { location: { lat, lng, ...location }, isp } = await getIpData(ip!)
    
    defaultData = {
      ip,
      location,
      coordinates: [lat, lng],
      isp: isp.split(' ')[0]
    }
  } catch (error) {
    defaultData = {
      ip: '',
      location: '',
      coordinates: ['', ''],
      isp: ''
    }
  }

  return {
    props: {
      defaultData
    }
  }
}

export default Home