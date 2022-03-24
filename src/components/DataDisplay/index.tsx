interface Props {
  ip: string,
  location: IpLocation,
  isp: string
}

const DataDisplay: React.FC<Props> = ({ ip, location, isp }) => {
  return (
    <section className="display">
      <div className="box">
        <span>IP Address</span>
        <p>{ ip }</p>
      </div>
      <div className="box">
        <span>Location</span>
        <p>{ location.city }, { location.region }</p>
      </div>
      <div className="box">
        <span>Timezone</span>
        <p>UTC { location.timezone }</p>
      </div>
      <div className="box">
        <span>ISP</span>
        <p>{ isp }</p>
      </div>
    </section>
  )
}

export default DataDisplay