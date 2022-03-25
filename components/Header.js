import HeaderItem from "./HeaderItem"
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'
import Image from 'next/image'

const Header = () => {

    // const photo = 'https://papreact.com/ua6'

    return (
        <>
        <header className="flex flex-col items-center justify-between m-5 sm:flex-row">
            
            <div className="flex flex-grow max-w-2xl justify-evenly" >
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            
            <Image src="https://pngset.com/images/hulu-white-logo-alphabet-text-word-symbol-transparent-png-1493374.png" width={200} height={100} alt="HuLu" className="object-contain" />
            
        </header>
        </>
    )
}

export default Header
