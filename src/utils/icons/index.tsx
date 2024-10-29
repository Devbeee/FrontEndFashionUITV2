import { LiaPhoneSolid } from 'react-icons/lia'
import { CiLocationOn, CiSettings } from 'react-icons/ci'
import { BsSearch, BsSortDown } from 'react-icons/bs'
import { SlUser, SlLogin, SlLogout } from 'react-icons/sl'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaGift, FaPlus, FaFilter } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaUser } from 'react-icons/fa'
import { FiX, FiInfo } from 'react-icons/fi'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { MdOutlineWatchLater } from 'react-icons/md'
import { PiUserPlus } from 'react-icons/pi'

export const icons = {
  phone: <LiaPhoneSolid />,
  location: <CiLocationOn />,
  search: <BsSearch />,
  user: <SlUser />,
  shoppingBag: <HiOutlineShoppingBag />,
  gift: <FaGift />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
  settings: <CiSettings />,
  eye: <IoEyeOutline />,
  info: <FiInfo />,
  faUser: <FaUser />,
  watch: <MdOutlineWatchLater />,
  sortDecreasing: <BsSortDown />,
  close: <FiX />,
  nextPage: <GrNext />,
  prevPage: <GrPrevious />,
  plus: <FaPlus />,
  login: <SlLogin />,
  logout: <SlLogout />,
  register: <PiUserPlus />,
  filter: {
    white: <FaFilter className='text-white' />,
    darkBlue: <FaFilter className='text-dark-blue' />
  }
}
