import kazanskySobor1 from '../../assets/cards-pictures/kazanskiy-sobor.jpeg'
import kazanskySobor2 from '../../assets/cards-pictures/kazanskSobor2.jpeg'
import bridge from '../../assets/cards-pictures/bridge.png'
import chapel from '../../assets/cards-pictures/chapel.png'
import music from '../../assets/cards-pictures/music.png'

export const cardsContent =
    [
         {
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

       {
            labelText: 'Новинка',
            picture: kazanskySobor2,
            price: 2900,
            onPearce: 3500,
            labelVariant: {
                position: 'absolute',
                width: '129px',
                height: '43px',
                left: '0px',
                top: '0px',

                borderRadius: '16px 0 16px 0',

                background: '#7553FF',
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
        },

       {
            labelText: 'Новинка',
            picture: bridge,
            price: 900,
            onPearce: 1200,
            labelVariant: {
                position: "absolute",
                width: "99px",
                height: "35px",
                left: "-0.5px",
                top: "40px",
                textAlign: "center",

                background: "#099CE8",
            },
            pictureLabelText: {
                top: '-4px',
                width: '100%',
                position: 'absolute',
                fontWeight: '600',
                fontSize: '12px',

                color: '#ffffff',
                textTransform: 'uppercase'
            }
        },

        {
            labelText: 'Круглый город',
            picture: chapel,
            price: null,
            onPearce: null,
            labelVariant: {
                position: "absolute",
                width: "120px",
                height: "35px",
                left: "-0.5px",
                top: "40px",
                textAlign: "center",

                background: "#FED74B",
            },
            pictureLabelText: {
                top: '-4px',
                width: '100%',
                position: 'absolute',
                fontWeight: '600',
                fontSize: '12px',

                color: '#000000',
                textTransform: 'uppercase'
            }
        },

         {
            labelText: null,
            picture: music,
            price: 900,
            onPearce: 1200,
        },
    ]