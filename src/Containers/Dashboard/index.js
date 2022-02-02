import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import FilterHandler from "../../Components/FilterHandler";
import TemplateHandler from "../../Components/TemplateHandler";
import { DashboardContainer } from "./dashboard.styles";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions";

const Dashboard = ({
  onFetch,
  templates,
  loading,
  category,
  order,
  date,
  search,
}) => {
  useEffect(() => {
    onFetch();
  }, [onFetch]);

  return (
    <Layout>
      <DashboardContainer>
        <FilterHandler />
        <TemplateHandler
          templates={templates}
          loading={loading}
          category={category}
          order={order}
          date={date}
          search={search}
        />
      </DashboardContainer>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    templates: state.templates.templates,
    loading: state.templates.loading,
    category: state.filters.category,
    order: state.filters.order,
    date: state.filters.date,
    search: state.filters.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(actions.fetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard, axios);
