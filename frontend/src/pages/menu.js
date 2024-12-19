import { Box, Card, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Seo } from "src/components/seo";
import { paths } from "src/paths";
import {
  CurrencyRupee,
  MoneyOff,
  Class,
  Person,
  Schedule,
  Assignment,
  LibraryBooks,
  AddCircle,
  Visibility,
  List,
  Drafts,
  LocalAtm,
  AccountBalance,
  Payment,
  CardMembership,
  PieChart,
  InsertChart,
  Event,
  TextFields,
  Security,
  Settings,
  Palette,
  School,
  // Book,
} from "@mui/icons-material";
import Download01Icon from "@untitled-ui/icons-react/build/esm/Download01";
import Upload01Icon from "@untitled-ui/icons-react/build/esm/Upload01";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { canAccessPage } from "src/utils/permissions";
import { HomeMenuItem } from "src/components/home-menu-item";
import { useAuthContext } from "src/contexts/auth-context";
import { useSearchParams } from "react-router-dom";
import { ModalManager } from "src/components/menu/modal-manger";

const Page = () => {
  const { user } = useAuthContext();
  const [renderItems, setRenderItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);
  const [modelContent, setModelContent] = useState("");

  const menuItems = [
    {
      category: "User",
      items: [
        {
          name: "Change Password",
          path: paths.profile,
          icon: <ChangeCircleIcon />,
          description: "Change User Password",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "change_password" });
          },
        },
        {
          name: "Add User",
          path: paths.addUser,
          icon: <AddCircle />,
          description: "Add New User",
        },
        {
          name: "User",
          path: paths.users,
          icon: <Person />,
          description: "All Users",
        },
        {
          name: "View User",
          path: paths.viewUser,
          icon: <Visibility />,
          description: "View User Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "view_user" });
          },
        },
        {
          name: "Edit User",
          path: paths.editUser,
          icon: <BorderColorIcon />,
          description: "Edit User Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_user" });
          },
        },
        {
          name: "User Permissions",
          path: paths.permissions,
          icon: <Security />,
          description: "User Permissions",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "user_permissions" });
          },
        },
      ],
    },
    {
      category: "Finance",
      items: [
        {
          name: "Finance",
          path: paths.finance,
          icon: <CurrencyRupee />,
          description: "Finance Dashboard",
        },
        {
          name: "Add Entry",
          path: paths.addFinance,
          icon: <AddCircle />,
          description: "Add Finance Entry",
        },
        {
          name: "Fee Dues",
          path: paths.studentFeeDues,
          icon: <MoneyOff />,
          description: "Student Fee Due",
        },
        {
          name: "Accounts",
          path: paths.accounts,
          icon: <AccountBalance />,
          description: "Manage Accounts",
        },
        {
          name: "Add Account",
          path: paths.addAccount,
          icon: <AddCircle />,
          description: "Add New Account",
        },
        {
          name: "Fee Structure",
          path: paths.feeStructure,
          icon: <LocalAtm />,
          description: "Manage Fee Structure",
        },
        {
          name: "Add Fee",
          path: paths.addFee,
          icon: <AddCircle />,
          description: "Add New Fee",
        },
        {
          name: "Edit Fee",
          path: paths.editFee,
          icon: <BorderColorIcon />,
          description: "Edit Fee Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_fee" });
          },
        },
        {
          name: "Fee Tags",
          path: paths.feeTags,
          icon: <Payment />,
          description: "Manage Fee Tags",
        },
        {
          name: "Add Fee Tags",
          path: paths.addFeeTags,
          icon: <AddCircle />,
          description: "Add New Fee Tags",
        },
        {
          name: "Edit Fee Tags",
          path: paths.editFeeTags,
          icon: <BorderColorIcon />,
          description: "Edit Fee Tags Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_fee_tags" });
          },
        },
        {
          name: "Previous Year Fees",
          path: paths.previousYearFees,
          icon: <MoneyOff />,
          description: "Previous Year Fees",
        },
        {
          name: "Add Previous Year Fees",
          path: paths.addPreviousYearFees,
          icon: <AddCircle />,
          description: "Add Previous Year Fees",
        },
      ],
    },
    {
      category: "Classes",
      items: [
        {
          name: "Classes",
          path: paths.classes,
          icon: <Class />,
          description: "All Classes",
        },
        {
          name: "Add New",
          path: paths.addClass,
          icon: <AddCircle />,
          description: "Add New Class",
        },
        {
          name: "Sections",
          path: paths.sections,
          icon: <Assignment />,
          description: "Classes Sections",
        },
        {
          name: "Edit Class",
          path: paths.editClass,
          icon: <BorderColorIcon />,
          description: "Edit Class Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "select_class" });
          },
        },
        {
          name: "View Section",
          path: paths.viewClassSection,
          icon: <Visibility />,
          description: "View Section Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "select_section" });
          },
        },
      ],
    },
    // {
    //   category: "Courses",
    //   items: [
    //     {
    //       name: "Courses",
    //       path: paths.courses,
    //       icon: <Book />,
    //       description: "All Courses",
    //     },
    //   ],
    // },
    {
      category: "Students",
      items: [
        {
          name: "Students",
          path: paths.students,
          icon: <Person />,
          description: "All Students",
        },
        {
          name: "Add New",
          path: paths.addStudent,
          icon: <AddCircle />,
          description: "Add New Students",
        },
        {
          name: "Attendance",
          path: paths.attendance,
          icon: <Schedule />,
          description: "Student Attendance",
        },
        {
          name: "Edit Student Table",
          path: paths.studentTable,
          icon: <List />,
          description: "Edit Student Table",
        },
        {
          name: "Data Formatter",
          path: paths.studentDataFormatter,
          icon: <Drafts />,
          description: "Student Data Formatter",
        },
        {
          name: "Generate ID",
          path: paths.studentGenerateID,
          icon: <CardMembership />,
          description: "Generate Student ID",
        },
        {
          name: "Edit Student",
          path: paths.editStudent,
          icon: <BorderColorIcon />,
          description: "Edit Student Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_student" });
          },
        },
        {
          name: "Import Students",
          icon: <Download01Icon />,
          description: "Import Students",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "import_students" });
          },
        },
        {
          name: "Export Students",
          icon: <Upload01Icon />,
          description: "Export Students",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "export_students" });
          },
        },
        {
          name: "Bulk Update Students",
          icon: <BorderColorIcon />,
          description: "Bulk Update Students",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "bulk_update_students" });
          },
        },
        {
          name: "Edit Student",
          path: paths.editStudent,
          icon: <BorderColorIcon />,
          description: "Edit Student Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_student" });
          },
        },

        {
          name: "Generate Admission Form",
          path: paths.generateAdmissionForm,
          icon: <BorderColorIcon />,
          description: "Generate Student Admission Form",
        },
        {
          name: "View Student",
          path: paths.viewStudent,
          icon: <Visibility />,
          description: "View Student Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "view_student" });
          },
        },
        {
          name: "Student Report",
          path: paths.studentDistribution,
          icon: <PieChart />,
          description: "Student Distribution Report",
        },
        {
          name: "Attendance Report",
          path: paths.attendanceReport,
          icon: <InsertChart />,
          description: "View Attendance Report",
        },
        {
          name: "Attendance Distribution Report",
          path: paths.attendanceDistributionReport,
          icon: <InsertChart />,
          description: "View Attendance Distribution",
        },
        {
          name: "Take Attendance",
          path: paths.takeClassSectionAttendance,
          icon: <Event />,
          description: "Take Attendance for Class Section",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "take_attendance" });
          },
        },
        {
          name: "View Attendance",
          path: paths.viewAttendance,
          icon: <Assignment />,
          description: "View Attendance Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "view_attendance" });
          },
        },
        {
          name: "Student Draft",
          path: paths.studentDraft,
          icon: <Drafts />,
          description: "Student Draft",
        },
        {
          name: "Add Student Draft",
          path: paths.addStudentDraft,
          icon: <AddCircle />,
          description: "Add Student Draft",
        },

        {
          name: "Student Dynamic Field",
          path: paths.studentDynamicField,
          icon: <TextFields />,
          description: "Student Dynamic Field",
        },
        {
          name: "Add Student Dynamic Field",
          path: paths.addStudentDynamicField,
          icon: <AddCircle />,
          description: "Add Student Dynamic Field",
        },
      ],
    },
    {
      category: "Teachers",
      items: [
        {
          name: "Assign",
          path: paths.assignClassSectionTeacher,
          icon: <Assignment />,
          description: "Assign class Teacher",
        },
        {
          name: "Add New",
          path: paths.addTeacher,
          icon: <AddCircle />,
          description: "Add New Teachers",
        },
        {
          name: "Teachers",
          path: paths.teachers,
          icon: <Person />,
          description: "Teachers",
        },
        {
          name: "Import Teachers",
          icon: <Download01Icon />,
          description: "Import Teachers",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "import_teachers" });
          },
        },
        {
          name: "View Teacher",
          path: paths.viewTeacher,
          icon: <Visibility />,
          description: "View Teacher Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "view_teacher" });
          },
        },
        {
          name: "Edit Teacher",
          path: paths.editTeacher,
          icon: <BorderColorIcon />,
          description: "Edit Teacher Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_teacher" });
          },
        },
        {
          name: "Pay Salary",
          path: paths.payTeacherSalary,
          icon: <LocalAtm />,
          description: "Pay Teacher Salary",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "pay_teacher_salary" });
          },
        },
        {
          name: "Teacher Draft",
          path: paths.teacherDraft,
          icon: <Drafts />,
          description: "Teacher Draft",
        },
        {
          name: "Add Teacher Draft",
          path: paths.addTeacherDraft,
          icon: <AddCircle />,
          description: "Add Teacher Draft",
        },
        // {
        //   name: "Teacher Attendance",
        //   path: paths.teacherAttendance,
        //   icon: <Schedule />,
        //   description: "Teacher Attendance",
        // },
      ],
    },
    {
      category: "Exams",
      items: [
        {
          name: "Exams",
          path: paths.examinations,
          icon: <LibraryBooks />,
          description: "Examinations",
        },
        {
          name: "Add Exam",
          path: paths.addExam,
          icon: <AddCircle />,
          description: "Add Exam",
        },
        {
          name: "Schedule",
          path: null,
          icon: <Schedule />,
          description: "View Exam Schedule",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "view_exam_schedule" });
          },
        },
        {
          name: "Edit Exam",
          path: paths.editExam,
          icon: <BorderColorIcon />,
          description: "Edit Exam Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_exam" });
          },
        },
        {
          name: "Add  Schedule",
          path: paths.addExamSchedule,
          icon: <Schedule />,
          description: "Add Exam Schedule",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "add_exam_schedule" });
          },
        },
        {
          name: "Preview Schedule",
          path: paths.previewExamSchedule,
          icon: <Visibility />,
          description: "Preview Exam Schedule",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "preview_exam_schedule" });
          },
        },
        {
          name: "Student Results Table",
          path: paths.studentResultTable,
          icon: <List />,
          description: "View Student Results",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "student_results" });
          },
        },
        {
          name: "Edit Results",
          path: paths.editResult,
          icon: <BorderColorIcon />,
          description: "Edit Exam Results",
        },
        {
          name: "Create Question Paper",
          path: paths.createQuestionPaper,
          icon: <AddCircle />,
          description: "Create Question Paper",
        },
      ],
    },
    {
      category: "Subjects",
      items: [
        {
          name: "Subjects",
          path: paths.subjects,
          icon: <LibraryBooks />,
          description: "Subjects",
        },
        {
          name: "Add New",
          path: paths.addSubject,
          icon: <AddCircle />,
          description: "Add Subjects",
        },
        {
          name: "Edit Subject",
          path: paths.editSubject,
          icon: <BorderColorIcon />,
          description: "Edit Subject Details",
          onClick: () => {
            setSearchParams({ show_model: "true", model_content: "edit_subject" });
          },
        },
      ],
    },
    {
      category: "Management",
      items: [
        {
          name: "View Action Requests",
          path: paths.actionRequests,
          icon: <LibraryBooks />,
          description: "Manage action requests related to subjects",
        },
        {
          name: "Add New Subject",
          path: paths.activity,
          icon: <AddCircle />,
          description: "Create a new subject entry",
        },
        {
          name: "Edit Subject Details",
          path: paths.createTenant,
          icon: <BorderColorIcon />,
          description: "Modify the details of existing subjects",
        },
        {
          name: "Manage Tenants",
          path: paths.tenants,
          icon: <School />,
          description: "Oversee and manage tenants in the system",
        },
        {
          name: "School Settings",
          path: paths.schoolSettings,
          icon: <Settings />,
          description: "Configure school-wide settings",
        },
        {
          name: "Edit School Settings",
          path: paths.editSchoolSettings,
          icon: <BorderColorIcon />,
          description: "Edit specific settings for the school",
        },
        {
          name: "Theme Settings",
          path: paths.updateThemeSettings,
          icon: <Palette />,
          description: "Customize the theme and appearance of the application",
        },
        {
          name: "On Board",
          path: paths.onBoard,
          icon: <BorderColorIcon />,
          description: "Create a new tenant",
        },
      ],
    },
  ];

  useEffect(() => {
    const filteredItems = menuItems
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => canAccessPage(user, item.path)),
      }))
      .filter((category) => category.items.length > 0);
    setRenderItems(filteredItems);
  }, [user]);

  useEffect(() => {
    const showModal = searchParams.get("show_model") === "true";
    const modelContentParam = searchParams.get("model_content");

    if (showModal && modelContentParam) {
      setModelContent(modelContentParam);
      setOpenModal(true);
    } else {
      setOpenModal(false);
      setModelContent("");
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setOpenModal(false);
    searchParams.delete("show_model");
    searchParams.delete("model_content");
    setSearchParams(searchParams);
  };

  return (
    <>
      <Seo title="Home" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Card>
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              {renderItems.length > 0 &&
                renderItems.map((category) => (
                  <Grid xs={12} key={category.category}>
                    <Typography variant="h6" sx={{ pt: 2, pb: 1 }}>
                      {category.category}
                    </Typography>
                    <Grid container spacing={2}>
                      {category.items?.map((item) => (
                        <Grid xs={4} sm={4} md={4} lg={2} key={item.path}>
                          <HomeMenuItem {...item} />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Card>
      </Box>

      <ModalManager open={openModal} onClose={handleCloseModal} modelContent={modelContent} />
    </>
  );
};

export default Page;
