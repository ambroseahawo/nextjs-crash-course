import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const value = 5

    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WedDev</span>
            </h1>
            <p className={headerStyles.description}>Keep upto date with the news</p>
            <style jsx>
                {`
                    .title{
                        color: ${value>3 ? 'red' : 'blue'};
                    }
                `}
            </style>
        </div>
    )
}

export default Header
