import * as React from 'react';
import {connect} from 'react-redux';


interface IProps {
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
  };
};

const mapDispatchToProps = {};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class ShowThread extends React.Component<IProps, IState> {

}
