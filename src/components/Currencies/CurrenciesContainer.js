import { connect } from 'react-redux';

import * as CurrencyActions from 'actions/CurrencyActions';
import Currencies from './Currencies';

const mapStateToProps = (state) => {
    const { rates } = state.currency;
    return {
        rates,
    };
};

const mapDispatchToProps = {
    getCurrency: CurrencyActions.getCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);