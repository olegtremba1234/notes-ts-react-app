import { Oval } from 'react-loader-spinner';

const backdrop = 'fixed inset-0 w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center'

export const Spinner  = () => {
    return <div className={backdrop}>
            <Oval color="#00BFFF" height={50} width={50} />
        </div>
}