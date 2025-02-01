import {faker} from "@faker-js/faker";
import {Accessor, createContext, createSignal, ParentProps, Setter, useContext} from "solid-js";

export interface UserContextProps {
  auth: Auth
  profile: Accessor<Profile>
  setProfile: Setter<Profile>
  setIsLoggedin: Setter<boolean>
  updateProfile: (payload: {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    address: string,
  }) => void
}

export type Profile = {
  id: string,
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  address: string,
  profileImgUrl: string,
}

export type Auth = {
  isLoggedin: Accessor<boolean>
  token?: string | null
}

const profile_sample: Profile = {
  id: 'sdfa',
  firstname: 'John',
  lastname: 'Doe',
  phone: '0678234432',
  email: 'johndoe@gmail.com',
  address: faker.location.streetAddress(),
  profileImgUrl: faker.image.avatar()
}

const UserContext = createContext<UserContextProps>();

export const UserContexProvider = (props: ParentProps) => {
  const [profile, setProfile] = createSignal<Profile>(profile_sample)
  const [isLoggedin, setIsLoggedin] = createSignal<boolean>(false)

  const updateProfile = (values: {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    address: string,
  }) => {
    console.log(values)
    setProfile(prev => ({
      ...prev,
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      email: values.email,
      address: values.address,
    }))
  }


  return (
    <UserContext.Provider value={{
      auth: {
        isLoggedin,
      },
      setIsLoggedin,
      profile,
      setProfile,
      updateProfile,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)