import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/dialog-ui"

  interface Props {
    handleClick : (id:number, quantity:number) => void
    data : any
    quantity?:number
  }
  
  export default function CartAddAlert({handleClick, data, quantity}:Props) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button onClick={() => handleClick(data.id, quantity??1)} className="my-2 w-full bg-blue-600 hover:bg-blue-800 text-white rounded-md p-1.5">Add Cart</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Added Successfully</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>

          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-blue-600 hover:bg-blue-800">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  