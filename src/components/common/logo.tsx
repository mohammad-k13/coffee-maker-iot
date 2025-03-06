import { useTranslation } from 'react-i18next';
import logo from '~/assets/images/pelazoomLogo.png'
interface LogoTypes {
    typo?: boolean;
    className?: string;
    height?: string
};

const Logo = ({ className = "", typo = false, height = '6em' }: LogoTypes) => {
    const {t } = useTranslation()
    return (
        <div className={`flex column alignCenter ${className}`}>
            <img alt='logo' src={logo} style={{ height }} />
            {
                typo ? (
                    <span className='mt2 textSecondary textAlign center fs-xs'>
                        {t('desc')}
                    </span>
                ) : ''
            }
        </div>
    )
};

export default Logo