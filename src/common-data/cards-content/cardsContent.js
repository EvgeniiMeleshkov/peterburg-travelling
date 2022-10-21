import kazanskySobor1 from '../../assets/cards-pictures/kazanskiy-sobor.jpeg'
import kazanskySobor2 from '../../assets/cards-pictures/kazanskSobor2.jpeg'

export const cardsContent =
    {
        yellowNew: {
            labelText: 'Новинка',
            picture: kazanskySobor1,
            price: 900,
            onPearce: 1200,
            labelVariant: {
                position: "absolute",
                width: "99px",
                height: "35px",
                left: "-0.5px",
                top: "40px",
                textAlign: "center",

                background: "#FED74B",
                borderRadius: "0"
            },
            pictureLabelText: {
                top: '-4px',
                width: '100%',
                position: 'absolute',
                fontWeight: '600',
                fontSize: '12px',

                color: '#3E3E3E',
                textTransform: 'uppercase'
            }
        },

        purpleNew: {
            labelText: 'Новинка',
            picture: kazanskySobor2,
            price: null,
            onPearce: null,
            labelVariant: {
                position: 'absolute',
                width: '129px',
                height: '43px',
                left: '0px',
                top: '0px',

                background: '#7553FF',
                borderRadius: '15px 0px 12px',

            },
            pictureLabelText: {
                position: 'absolute',
                width: '139px',
                height: '43px',
                left: '29px',
                top: '-2px',

                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                textTransform: 'uppercase',
                color: '#FFFFFF'
            }
        }
    }