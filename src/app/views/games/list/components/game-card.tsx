/* eslint-disable @typescript-eslint/no-explicit-any */
import BadgeComponent from "../../../../common/library/components/badges/badge";
import { ICard } from "../../../../common/library/components/cards/ intefaces";
import IconComponent from "../../../../common/library/components/icon/icon";
import { imgResizer } from "../../../../common/utilities";

export const cardProps = (item: any, isDarkMode: any): ICard => {
    return {
        header: {
            children: (
                <img
                    src={imgResizer(item.background_image)}
                    className="card-img-top"
                    alt="..."
                />
            ),
        },
        body: {
            cardTitle: `${item.name}`,
            children: (
                <div className="d-flex justify-content-between">
                    <div>
                        {item.parent_platforms.map((platform: any, index: any) => {
                            const Icon = platform.icon;
                            return Icon ? (
                                <span className="px-2" key={index}>
                                    <IconComponent
                                        color=""
                                        size={20}
                                        cursor="pointer"
                                        Icon={Icon}
                                    />
                                </span>
                            ) : null;
                        })}
                    </div>
                    <div>
                        <BadgeComponent
                            label={item.metacritic}
                            classes={{
                                contextual:
                                    item.metacritic >= 90
                                        ? 'success'
                                        : item.metacritic >= 60
                                        ? 'warning'
                                        : 'danger',
                            }}
                        />
                    </div>
                </div>
            ),
        },
        classes: {
            equalHeight: true,
        },
        isDarkMode,
    };
};