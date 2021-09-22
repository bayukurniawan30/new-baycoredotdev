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
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share"

function SocialShare() {
    const router = useRouter()

    return (
        <>
            <EmailShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`}>
                <EmailIcon size={32} round />
            </EmailShareButton>

            <FacebookShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <WhatsappShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <PinterestShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <PinterestIcon size={32} round />
            </PinterestShareButton>

            <TelegramShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <TelegramIcon size={32} round />
            </TelegramShareButton>

            <TwitterShareButton url={`${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`} className="mx-2">
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </>
    )
}

export default SocialShare