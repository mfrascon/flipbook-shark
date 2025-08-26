import HTMLFlipBook from 'react-pageflip';
import cover from '../assets/cover.png';
import page1 from '../assets/page-1.png';
import page2 from '../assets/page-2.png';
import page3 from '../assets/page-3.png';
import page4 from '../assets/page-4.png';
import page5 from '../assets/page-5.png';
import page6 from '../assets/page-6.png';
import page7 from '../assets/page-7.png';
import page8 from '../assets/page-8.png';
import page9 from '../assets/page-9.png';
import page10 from '../assets/page-10.png';

function Book() {

    return (
        <HTMLFlipBook 
            width={500} 
            height={700}
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={true}
            size='fixed'
            >
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content cover">
                        <img
                            src={cover}
                            alt="pdf cover"
                            className="book-cover">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page1}
                            alt="page 1"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page2}
                            alt="page 2"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page3}
                            alt="page 3"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page4}
                            alt="page 4"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page5}
                            alt="page 5"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page6}
                            alt="page 6"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page7}
                            alt="page 7"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page8}
                            alt="page 8"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page9}
                            alt="page 9"
                            className="page-image">
                        </img>
                    </div>
                </div>
                <div className="page" style={{ background: 'transparent' }}>
                    <div className="page-content">
                        <img
                            src={page10}
                            alt="page 10"
                            className="page-image">
                        </img>
                    </div>
                </div>
        </HTMLFlipBook>
    );
}

export default Book 