function Intro({ theme }) {
    return (
        <div className={`introCard current-${theme}`}>
            <div className="myIntro">
                <h1>Szu Szu Wang</h1>
                <p style={{letterSpacing: '2px', fontWeight: '600'}}>also known as</p>
                <h3>Hay Thar Htin Zaw</h3>
                <p>Software Engineering Student building practical web applications.</p>
                <p>Take a look around my developing portfolio 🔍</p>
            </div>
        </div>
    );
}

export default Intro;