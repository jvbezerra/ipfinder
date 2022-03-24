import axios from 'axios'

const API_KEY = process.env.IPIFY_API_KEY
const api = axios.create({ baseURL: `https://geo.ipify.org/api/v2` })

export const getIpData = async (ip: string) => {
  const { data } = await api.get(`/country,city?apiKey=${API_KEY}&ipAddress=${ip}`)
  return data as IpData
}