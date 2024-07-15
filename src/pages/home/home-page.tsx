import { useAuthProvider } from '@/auth'

export const HomePage = () => {
    const { currentUser } = useAuthProvider()
    return (
        <>
            Hello, {currentUser?.firstName} {currentUser?.lastName}
        </>
    )
}
