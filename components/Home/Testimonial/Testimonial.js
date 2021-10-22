

import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

import avatar1 from "../../../public/assets/avatar-1.png";
import avatar2 from "../../../public/assets/avatar-2.png";
import avatar3 from "../../../public/assets/avatar-3.png";

export default function Testimonial() {
  return (
    <div className={styles.Testimonial}>
      <TestimonialCard
        image={avatar1}
        name="Viezh Robert"
        location="Warsaw, Poland"
        bordered
      />
      <TestimonialCard
        image={avatar2}
        name="Yessica Christy"
        location="Shanxi, China"
      />
      <TestimonialCard
        image={avatar3}
        name="Kim Young Jou"
        location="Seoul, South Korea"
      />
    </div>
  );
}
