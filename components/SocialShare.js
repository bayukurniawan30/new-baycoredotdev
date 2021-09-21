import { useRouter } from 'next/router';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon
} from "react-share"

function SocialShare() {
    const router = useRouter()
    console.log(process.env.NEXT_PUBLIC_WEB_URL + router.asPath)

    return (
        <>
            <EmailShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`}>
                <EmailIcon size={32} round />
            </EmailShareButton>

            <FacebookShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </>
    )
}

export default SocialShare