import JobsForm from "@/components/jobsForm/JobsForm";

export const metadata = {
  title: " التوظيف | يسير",
  description: "قدم علي وظيفة في يسير"
};

const page = () => {
  return (
    <div className="page-section pt-90 pt-lg-100 pb-0">
      <JobsForm />
    </div>
  );
};

export default page;
