import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/dialog-ui"

  import { Loader2 } from "lucide-react"

  interface Props {
    handleClick : (id:number, quantity:number) => void
    data : any
    quantity?:number
    loading?:boolean
  }
  
  export default function CartAddAlert({handleClick, data, quantity, loading}:Props) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button onClick={() => handleClick(data.id, quantity??1)} className="my-2 w-full bg-blue-600 hover:bg-blue-800 text-white rounded-md p-1.5">Add Cart</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {
              loading ?
              <AlertDialogTitle>adding..</AlertDialogTitle>:
              <AlertDialogTitle>Added Successfully</AlertDialogTitle>
            }
          </AlertDialogHeader>
          <AlertDialogDescription className="w-full">
            {loading &&<Loader2 className="mx-auto animate-spin w-10 h-10 text-blue-600"/>}
          </AlertDialogDescription>
          <AlertDialogFooter>
            {
              !loading &&
              <AlertDialogAction className="bg-blue-600 hover:bg-blue-800">Continue</AlertDialogAction>
            }
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  