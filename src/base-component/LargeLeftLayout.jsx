import React from 'react';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

import messages from './messages';

const LargeLeftLayout = (props) => {
  const { intl, experimentName } = props;
  new ClipboardJS('.button'); // eslint-disable-line no-new
  return (
    <div className="min-vh-100 pr-0 mt-lg-n2 d-flex align-items-center">
      <svg className="large-screen-svg-line ml-5">
        <line x1="50" y1="0" x2="10" y2="215" />
      </svg>
      <div>
        <h1 className="large-heading">
          {intl.formatMessage(messages['start.learning'])}
          <span className={experimentName === 'variation1' ? 'text-accent-b' : 'text-accent-a'}><br />
            {intl.formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
          </span>
        </h1>
        {experimentName === 'variation1' && (
          <div className="lead text-light-300">Get <span className="text-accent-a font-weight-bold ">15% off</span> your first verified <br />
            certificate* with code
            <span id="edxWelcome" className="text-white edxWelcome">EDXWELCOME
              <button
                type="button"
                className="button"
                data-clipboard-action="copy"
                data-clipboard-target="#edxWelcome"
              > Copy To Clipboard
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

LargeLeftLayout.propTypes = {
  intl: intlShape.isRequired,
  experimentName: PropTypes.string,
};

LargeLeftLayout.defaultProps = {
  experimentName: 'variation1',
};

export default injectIntl(LargeLeftLayout);
