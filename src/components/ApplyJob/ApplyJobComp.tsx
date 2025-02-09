import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Paperclip } from "tabler-icons-react";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);

  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSec(x);
      if (x == 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };
  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "brightSun.4", type: "bars" }}
        />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-14" src="/Companies/Dell.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl">Software engineer</div>
              <div className="text-lg text-mine-shaft-300">
                google&bull;3 days ago &bull; 48 applicant
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2 text-left">
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              label="Full Name"
              placeholder="Enter  Name"
              withAsterisk
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              label="Email"
              placeholder="Enter  email"
              withAsterisk
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2 text-left">
            <NumberInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              label="Phone number"
              placeholder="Enter  phone number"
              withAsterisk
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              label="Personal website"
              placeholder="Enter  Url"
              withAsterisk
            />
          </div>
          <div className="text-left">
            <FileInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              leftSection={<Paperclip />}
              label="Attach Your CV"
              placeholder="Your CV"
              leftSectionPointerEvents="none"
              withAsterisk
            />
          </div>
          <div className="text-left">
            <Textarea
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              placeholder="Type Something About Yourself.."
              label="Cover Letter"
              autosize
              minRows={4}
              withAsterisk
            />
          </div>
          {!preview && (
            <Button color="brightSun.4" variant="light" onClick={handlePreview}>
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                color="brightSun.4"
                variant="outline"
                onClick={handlePreview}
              >
                Edit
              </Button>
              <Button
                fullWidth
                color="brightSun.4"
                variant="light"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${
          submit ? "translate-y-0" : "-translate-y-20"
        }`}
        icon={<Check style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!"
        mt="md"
        withCloseButton={false}
        withBorder
      >
        Redirecting to find Jobs in {sec} seconds....
      </Notification>
    </>
  );
};
export default ApplyJobComp;
