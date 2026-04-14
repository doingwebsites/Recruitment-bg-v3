import { 
  Users, 
  Briefcase, 
  Globe, 
  Search, 
  Heart, 
  Award,
  type LucideIcon 
} from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}


export const trustMetrics = [
  {
    value: "650+",
    label: "Successful IT Hirings",
    description: "",
  },
  {
    value: "94%",
    label: "Retention Rate",
    description: "",
  },
  {
    value: "70%",
    label: "Seniors + roles",
    description: "",
  },
  {
    value: "100%+",
    label: "Recruiting all Tech Stacks",
    description: "",
  },
]
