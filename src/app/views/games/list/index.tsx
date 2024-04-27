import CardComponent from '../../../common/library/components/cards/card';
import { cardProps } from '../config';
import { useTheme } from '../../../common/context/theme/theme';
import useGames from '../hooks/useGames';

const GameIndex = () => {
    const { isDarkMode } = useTheme();
    const { games } = useGames();

    return (
        <div>
            <h1 className="my-5">GameIndex</h1>
            <div className="row">
                <div className="col-md-2">Side</div>
                <div className="col-md-10">
                    <div className="row">
                        {games.map((item) => {
                            const props = cardProps(item, isDarkMode);
                            return (
                                <div
                                    className="col-md-6 col-lg-4 mb-4"
                                    key={item.id}
                                >
                                    <CardComponent
                                        header={props.header}
                                        body={props.body}
                                        classes={props.classes}
                                        isDarkMode={props.isDarkMode}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameIndex;
