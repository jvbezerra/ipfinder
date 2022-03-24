type IpLocation = {
  city: string,
  region: string,
  postalCode: string,
  
  lat: number,
  lng: number,
  timezone: string
}

type IpData = {
  ip: string,
  location: IpLocation,
  isp: string,
  coordinates?: [number, number]
}