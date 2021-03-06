import React from 'react';
import PropTypes from 'prop-types';

import { SelectButton } from '../../../shared/components/select-button';

import AerialIcon from '../../../../public/images/icon-aerial.svg';
import TopographyIcon from '../../../../public/images/icon-topography.svg';

function hasLayer(activeBaseLayer, baseLayers) {
  return baseLayers && baseLayers.length > 0 &&
    baseLayers.some(layer => layer.value === activeBaseLayer);
}

const MapType = ({ activeBaseLayer, baseLayers, onBaseLayerToggle }) => (
  <section className="map-type">
    <div className="map-type__title">Achtergrond</div>

    <SelectButton
      className="map-type__select map-type__select--topography"
      handleChange={onBaseLayerToggle}
      icon={TopographyIcon}
      isDisabled={!hasLayer(activeBaseLayer, baseLayers.topography)}
      name="topography"
      options={baseLayers.topography}
      value={activeBaseLayer}
    />

    <SelectButton
      className="map-type__select map-type__select--aerial"
      handleChange={onBaseLayerToggle}
      icon={AerialIcon}
      isDisabled={!hasLayer(activeBaseLayer, baseLayers.aerial)}
      name="aerial"
      options={baseLayers.aerial}
      value={activeBaseLayer}
    />
  </section>
);

MapType.propTypes = {
  activeBaseLayer: PropTypes.string, // eslint-disable-line
  baseLayers: PropTypes.object, // eslint-disable-line
  onBaseLayerToggle: PropTypes.func // eslint-disable-line
};

export default MapType;
