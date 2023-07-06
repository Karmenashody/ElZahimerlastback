export interface registerPatient
{
    bithDate: Date | null | undefined,
    relative: number | null | undefined,
    diseaselevel: number | null | undefined,
    deseasDiscription:string  | null | undefined,
    username: any,
    gender: number | null | undefined,
    country: string | null | undefined,
    city?:string | null | undefined,
    image: any,
    phoneNumber: string | null | undefined,
    nationalId: string | null | undefined,
    isHelper: boolean,
    isPatient: boolean,
    email:string  | null | undefined,
    password:string | null | undefined
  }