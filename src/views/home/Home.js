import React from 'react'
import i18n from '../../locales'
import { PageHeadline } from '../../headline'
import { dataTest } from '../../dataTest'
import {
    META_MAPPING_LIST_PATH,
    GODATA_CONFIG_FORM_PATH,
} from '../'
import s from './Home.module.css'
import HomeCard from './HomeCard'

export const HOME_PATH = '/'
export const HOME_LABEL = 'Overview'

export const Home = () => {
    return (
        <div data-test={dataTest('views-home')} className={s.container}>
            <PageHeadline>
                {i18n.t('Overview: Interoperability Configuration', {
                    nsSeparator: '>',
                })}
            </PageHeadline>
            <p className={s.explanation}>
                {i18n.t(
                    'Configure settings for sending, receiving, data reporting, alerts, registration and more.'
                )}
            </p>
            <div className={s.grid}>
                <div className={s.gridItem}>
                    <HomeCard
                        titleText={i18n.t('GoData Configuration')}
                        bodyText={i18n.t(
                            'Add and manage GoData server credntials for sending and receiving to DHIS2.'
                        )}
                        linkText={i18n.t('Set up server')}
                        to={GODATA_CONFIG_FORM_PATH}
                    />
                </div>
                <div className={s.gridItem}>
                    <HomeCard
                        titleText={i18n.t('Metadata Configuration')}
                        bodyText={i18n.t(
                            'Add and manage GoData and DHIS2 Metadata for data exchange.'
                        )}
                        linkText={i18n.t('Map Metadata')}
                        to={META_MAPPING_LIST_PATH}
                    />
                </div>
            </div>
        </div>
    )
}
