import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({ id, title, items }) => {
                    return <PreviewCollection key={id} title={title} items={items} />
                })
                }
            </div>
        )
    }
}

export default ShopPage;