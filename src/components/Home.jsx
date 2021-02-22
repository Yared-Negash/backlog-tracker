import LogList from "./LogList"

function Home(props) {
    return (
        <LogList
            logCardList={props.logCardList}
        />
    );
}

export default Home;
