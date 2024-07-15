import { useAuthProvider } from '@/libs/auth'

export const HomePage = () => {
    const { currentUser } = useAuthProvider()
    return (
        <>
            Hello, {currentUser?.firstName} {currentUser?.lastName}
        </>
    )
}
